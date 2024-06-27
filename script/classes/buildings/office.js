class Office extends Building {
  constructor(pos, maxEmployeeCount) {
    super(pos);
    layers.background2.push(this);
    workplaces.push(this);

    this.employeeCount = { current: 0, max: maxEmployeeCount };
    this.employees = [];

    this.schedule = Object.fromEntries(
      Array.from({ length: 288 }, (_, i) => [i, null])
    );

    const start = 108; // specify the starting key
    const end = 204; // specify the ending key

    for (let i = start; i < end; i++) {
      this.schedule[i] = 'work';
    }


    // DEBUG ONLY
    this.visible = true;
  }

  update() {}

  render() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(this.pos.x, this.pos.y, 50, 50);
  }

  employ(person) {
    this.employeeCount.current++;
    this.employees.push(person);
  }
}
