// classe Controller du MVC
class Controller {
    // Constructeur du controller qui initialise le model, la vue, et les bindings
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Affectation pour les bindings
        this.bindDisplayTime = this.bindDisplayTime.bind(this);
        this.model.bindDisplayTime(this.bindDisplayTime);

        this.bindGetTime = this.bindGetTime.bind(this);
        this.view.bindGetTime(this.bindGetTime);

        this.bindResetTime = this.bindResetTime.bind(this);
        this.view.bindResetTime(this.bindResetTime);

        this.bindDisplayAnt = this.bindDisplayAnt.bind(this);
        this.model.bindDisplayAnt(this.bindDisplayAnt);

        this.model.bindDisplay(this.bindDisplay.bind(this));
        this.model.play();
    }

    bindDisplay(grid) {
        this.view.display(grid);
    }

    bindDisplayAnt(position) {
        this.view.displayAnt(position);
    }

    bindDisplayTime(time) {
        this.view.displayTime(time);
    }

    bindGetTime() {
        this.model.getTime();
    }

    bindResetTime() {
        this.model.resetTime();
    }

}
