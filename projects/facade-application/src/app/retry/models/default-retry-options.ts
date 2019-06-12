import {RetryDecoratorOptions} from './retry-decorator-options.model';
import {throwError} from 'rxjs';

export const DefaultRetryOptions: RetryDecoratorOptions = {
  retryCount: 2,
  delayTime: 2000,
  fallBack: (e: any) => throwError(e)
};
