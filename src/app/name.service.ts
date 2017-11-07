import { Injectable } from '@angular/core';

@Injectable()
export class NameService {

  names = ['გოგიტა'];

  constructor() {
  }

  onAdd(name: string) {
      if (this.isUnique(name)) {
          this.names.push(name);
      }
  }

    isUnique(name) {
        const check = this.names.find((e) => {
            return e === name;
        });
        return check === undefined;
    }
}
