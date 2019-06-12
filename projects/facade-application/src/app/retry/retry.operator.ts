import {RetryDecoratorOptions} from './models/retry-decorator-options.model';
import {Observable, timer} from 'rxjs';
import {delayWhen, retryWhen, scan} from 'rxjs/operators';
import {DefaultRetryOptions} from './models/default-retry-options';

export function httpRetry(options: RetryDecoratorOptions = DefaultRetryOptions){
  return (src: Observable<any>) => src.pipe(
    retryWhen((errors) =>
      errors.pipe(
        delayWhen((error) => {
          // here get custom timer value from error
          return timer(options.delayTime)
        }),
        scan((errorCount, err) => {
          if (errorCount >= options.retryCount) {
            throw err
          }
          return errorCount + 1;
        }, 0),
      )
    )
  )
}
