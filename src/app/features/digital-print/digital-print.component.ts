import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { bookType, color, cover, coverType, paperType, pump, size } from 'src/app/masterData';
import { digitalData } from 'src/app/mock/digitalData';

@Component({
  selector: 'app-digital-print',
  templateUrl: './digital-print.component.html',
  styleUrls: ['./digital-print.component.scss']
})
export class DigitalPrintComponent implements OnInit {
  constructor(private fb: FormBuilder, private message: NzMessageService) {
    this.ListOfData = digitalData;
    this.createaForm();
  }
  reportForm!: FormGroup;
  digitalData: any = [];
  dateNow: Date = new Date();
  isVisible = false;
  colorList = color;
  sizeList = size
  paperTypeList = paperType
  coverlist = cover
  coverTypeList = coverType
  bookTypeList = bookType
  pumpList = pump

  ListOfData: any[] = []


  createaForm(): void {
    this.reportForm = this.fb.group({
      jobNo: [this.running(), Validators.required],
      jobName: [''],
      jobDate: [this.dateNow],
      printSize: [''],
      printNo: [''],

      paperType: [''],
      paperGram: [''],

      coatingType: [''],
      bindingType: [''],

      customerName: [''],
      address: [''],
      phone: [''],
      email: [''],
      payment: [''],
      discount: [''],
      completionDate: [''],
      note: ['']
    });
  }

  ngOnInit(): void {
  }

  running(): string {
    const currentDate = new Date();
    const yearString = currentDate.getFullYear().toString().slice(-2);
    const monthIndex = currentDate.getMonth() + 1;
    const monthString = monthIndex < 10 ? '0' + monthIndex : monthIndex.toString();

    const YYMM = yearString + monthString;

    const lastData = this.ListOfData[this.ListOfData.length - 1];
    const lastRunningNumber = parseInt(lastData.jobNo.slice(-4), 10); // Parse as integer

    // Increment the last running number by 1
    const incrementedRunningNumber = lastRunningNumber + 1;

    // Format the running number to have leading zeros
    const paddedRunningNumber = ('000' + incrementedRunningNumber).slice(-4);

    return YYMM + '-' + paddedRunningNumber;
  }

  RunnigNo(): string {
    return this.reportForm.get('jobNo')?.value;
  }

  getPage(): any {
    const total = this.ListOfData.length;
    const current = this.isNewJob() ? this.ListOfData.findIndex(obj => obj.jobNo === this.reportForm.get('jobNo')?.value) + 1 : 'xx';
    return {
      total,
      current
    }
  }

  isNewJob(): boolean {
    return this.ListOfData.find(obj => obj.jobNo == this.reportForm.get('jobNo')?.value);
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  calculatePrice(): void {
    console.log(this.reportForm.value);
    if (this.isNewJob()) {
      let current = this.ListOfData.find(obj => obj.jobNo == this.reportForm.get('jobNo')?.value);
      current = this.reportForm.value
      this.message.create('success', `อัพเดด ${this.reportForm.get('jobNo')?.value} เรียบร้อย`);
    } else {
      this.ListOfData.push(this.reportForm.value);
      this.message.create('success', `เพิ่ม ${this.reportForm.get('jobNo')?.value} เรียบร้อย`);
    }
  }

  select(row: any) {
    this.ListOfData.filter((x: any) => x.jobNo == row.jobNo).forEach((x: any) => {
      this.reportForm.patchValue(x);
    })
    this.isVisible = false
  }

  cearJob(): void {
    if (this.isNewJob()) {
      this.reportForm.reset();
      this.reportForm.get('jobNo')?.setValue(this.running());
    }
  }

  nextJob() {
    if (this.isNewJob()) {
      const current = this.ListOfData.findIndex(obj => obj.jobNo === this.reportForm.get('jobNo')?.value);
      let nextJob = this.ListOfData[current + 1];
      if (nextJob) {
        this.reportForm.patchValue(nextJob);
      }
    }
  }

  prevJob() {
    if (this.isNewJob()) {
      const current = this.ListOfData.findIndex(obj => obj.jobNo === this.reportForm.get('jobNo')?.value);
      let prevJob = this.ListOfData[current - 1];
      if (prevJob) {
        this.reportForm.patchValue(prevJob);
      }
    } else {
      const lastData = this.ListOfData[this.ListOfData.length - 1];
      if (lastData) {
        this.reportForm.patchValue(lastData);
      }
    }
  }


  nextJobb() {
    const lastData = this.ListOfData[this.ListOfData.length - 1];
    if (lastData) {
      this.reportForm.patchValue(lastData);
    }
  }

  prevJobb() {
    const fistData = this.ListOfData[0];
    if (fistData) {
      this.reportForm.patchValue(fistData);
    }
  }

  deleteJob() {
    if (this.isNewJob()) {
      const current = this.ListOfData.findIndex(obj => obj.jobNo == this.reportForm.get('jobNo')?.value);
      if (current >= 0) {
        this.ListOfData.splice(current, 1);

        const fistData = this.ListOfData[0];
        if (fistData) {
          this.reportForm.patchValue(fistData);
        } else {
          this.cearJob();
        }
      }
    } else {

    }
  }
}
