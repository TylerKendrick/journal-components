import { property, customElement, LitElement, html } from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js";

@customElement("day-entry")
class DayEntry extends LitElement {
    @property year;
    render() {
        const { year, month, day } = this;
        return html`
        <div class="date-entry">
            <div class="year-entry">
                <button>&lt;</button>
                <button>${year}</button>
                <button>&gt;</button>
            </div>
            <div class="month-entry">
                <button>&lt;</button>
                <button>${month}</button>
                <button>&gt;</button>
            </div>
            <div class="day-entry">
                <button>&lt;</button>
                <button>${day}</button>
                <button>&gt;</button>
            </div>
        </div>`;
    }
}