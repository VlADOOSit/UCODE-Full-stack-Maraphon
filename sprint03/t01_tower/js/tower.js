class Tower extends Building {
     get hasElevator() {
          return this._hasElevator
     }
     get arcCapacity() {
          return this._arcCapacity
     }
     get height() {
          return this._height
     }
     set hasElevator(value) {
          this._hasElevator = value
     }
     set arcCapacity(value) {
          this._arcCapacity = value
     }
     set height(value) {
          this._height = value
     }


     getFloorHeight() {
          return this.height / this.floors;
     }

     toString() {
          return [
              `Floors: ${this.floors}`,
              `Material: ${this.material}`,
              `Address: ${this.address}`,
              `hasElevator: ${this.hasElevator}`,
              `arcCapacity: ${this.arcCapacity}`,
              `height: ${this.height}`,
              `Floor height: ${this.getFloorHeight()}`,

          ].join('\n');
     }
}
