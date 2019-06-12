import {RetryDecoratorOptions} from './models/retry-decorator-options.model';
import {RetryOptions} from './models/retry-options.model';
import {httpRetry} from './retry.operator';

export function retry(options?: RetryDecoratorOptions) {
  return function (
    target: Object,
    propertyName: string,
    propertyDescriptor: PropertyDescriptor): PropertyDescriptor {
    const method = propertyDescriptor.value;

    const retryOptions = new RetryOptions(options)

    propertyDescriptor.value = function (...args: any[]) {
      return method.apply(this, args).pipe(
        httpRetry(retryOptions)
      )
    }
    return propertyDescriptor;
  }
}
