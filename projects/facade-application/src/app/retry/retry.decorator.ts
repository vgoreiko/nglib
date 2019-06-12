import {catchError, delay, retryWhen, scan} from 'rxjs/operators';
import {RetryDecoratorOptions} from './models/retry-decorator-options.model';
import {RetryOptions} from './models/retry-options.model';

export function retry(options?: RetryDecoratorOptions) {
  return function (
    target: Object,
    propertyName: string,
    propertyDescriptor: PropertyDescriptor): PropertyDescriptor {
    const method = propertyDescriptor.value;

    const retryOptions = new RetryOptions(options)

    propertyDescriptor.value = function (...args: any[]) {

      const result = method.apply(this, args).pipe(
        retryWhen((errors) =>
          errors.pipe(
            scan((errorCount, err) => {
              if (errorCount >= retryOptions.retryCount) {
                throw err
              }
              return errorCount + 1;
            }, 0),
            delay(retryOptions.delayTime)
          )
        ),
        catchError( (e) => {
          console.log(e)
          return retryOptions.fallBack(e)
        })
      );
      return result;
    }
    return propertyDescriptor;
  }
}
