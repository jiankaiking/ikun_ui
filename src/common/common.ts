interface FormJson {
  type?: string;
  label?: string;
  field?: string;
  list?: any[];
  changeFn?: any;
}

interface FormItemData {}
function initFormJsonItem(options?: Partial<FormJson>): FormJson {
  const defaults = {
    hidden: false,
  };
  return {
    ...defaults,
    ...options,
  };
}

export type { FormJson };
export { initFormJsonItem };
