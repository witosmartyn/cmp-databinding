import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component, ContentChild,
  DoCheck, ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {Output} from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class ServerElementComponent implements
  OnInit, DoCheck, OnDestroy, OnChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef
    constructor() {
    console.log('construct server');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('nativeElement.value is: ' + this.header.nativeElement.value);
    console.log('nativeElement.textContent is: ' + this.header.nativeElement.textContent);
    console.log('Text Content paragraph is: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }



  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    console.log('Text Content paragraph is: ' + this.paragraph.nativeElement.textContent);


  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log(this.header.nativeElement.textContent);

  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy(): void {
    console.log('destroy server');
  }
}
