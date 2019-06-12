import {catchError, delay, retryWhen, scan} from 'rxjs/operators';
import {of, throwError} from 'rxjs';

export function retry(retryCount: number = 2, fallBack?: any) {
  return function (
    target: Object,
    propertyName: string,
    propertyDescriptor: PropertyDescriptor): PropertyDescriptor {
    const method = propertyDescriptor.value;

    propertyDescriptor.value = function (...args: any[]) {

      const result = method.apply(this, args).pipe(
        retryWhen((errors) =>
          errors.pipe(
            scan((errorCount, err) => {
              console.log('Try ' + (errorCount + 1));
              if (errorCount >= retryCount) {
                throw err
              }
              return errorCount + 1;
            }, 0),
            delay(1000)
          )
        ),
        catchError( (e) => {
          console.log('catchError')
          return fallBack ? of(fallBack) : throwError(e)
        })
      );
      return result;
    }
    return propertyDescriptor;
  }
}
