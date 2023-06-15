export class Injectable {
  provider = new Map();
  constructor(private _provider: any[] = []) {
    this._provider.forEach((provider) => {
      this.provider.set(provider, new provider());
    });
  }
  getProvider(keyget) {
    return this.provider.get(keyget);
  }
}
