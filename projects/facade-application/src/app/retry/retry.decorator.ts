import {catchError, delay, delayWhen, retryWhen, scan} from 'rxjs/operators';
import {RetryDecoratorOptions} from './models/retry-decorator-options.model';
import {RetryOptions} from './models/retry-options.model';
import {timer} from 'rxjs';

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
            delayWhen((error) => {
              // here get custom timer value from error
              return timer(retryOptions.delayTime)
            }),
            scan((errorCount, err) => {
              if (errorCount >= retryOptions.retryCount) {
                throw err
              }
              return errorCount + 1;
            }, 0),
          )
        ),
        catchError( (e) => {
          return retryOptions.fallBack(e)
        })
      );
      return result;
    }
    return propertyDescriptor;
  }
}
