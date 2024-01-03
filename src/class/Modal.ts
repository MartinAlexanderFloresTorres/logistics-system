export class Modal<T> {
  public isShow = false;
  public data: T | null = null;

  constructor() {
    this.isShow = false;
    this.data = null;
  }

  public show(payload: T | null, callback = () => {}) {
    this.isShow = true;
    if (payload) this.data = payload;
    callback();
  }

  public hide() {
    if (this?.data) this.data = null;
    if (this?.isShow) this.isShow = false;
  }

  public toggle(data?: T) {
    this.isShow = !this.isShow;
    if (data) this.data = data;
  }

  public removeData(callback = () => {}) {
    this.data = null;
    callback();
  }
}
