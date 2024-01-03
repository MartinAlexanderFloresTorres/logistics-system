export class Loading {
  public loading: boolean;

  constructor(defaultValue = false) {
    this.loading = defaultValue;
  }

  public show() {
    this.loading = true;
  }

  public hide() {
    this.loading = false;
  }
}
