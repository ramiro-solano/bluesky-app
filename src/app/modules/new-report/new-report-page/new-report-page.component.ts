import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    standalone: true,
    imports: [],
    selector: "app-new-report-page",
    templateUrl: "./new-report-page.component.html",
})
export default class NewReportPageComponent {

    newReportFrom: FormGroup = new FormGroup({});

    pdfInfo = [
        {
            
        }
    ]

    resetForm() {
        
    }

    generatePDF() {
        
    }
}