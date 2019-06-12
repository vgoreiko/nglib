import {RetryDecoratorOptions} from './retry-decorator-options.model';
import {DefaultRetryOptions} from './default-retry-options';

export class RetryOptions implements RetryDecoratorOptions {
  retryCount: number;
  delayTime: number;
  fallBack: Function;

  constructor(private options: RetryDecoratorOptions) {
    this.retryCount = (this.options && this.options.retryCount) ? this.options.retryCount : DefaultRetryOptions.retryCount;

    this.delayTime = (this.options && this.options.delayTime) ? this.options.delayTime : DefaultRetryOptions.delayTime;

    this.fallBack = (this.options && this.options.fallBack) ? this.options.fallBack : DefaultRetryOptions.fallBack;
  }

}
