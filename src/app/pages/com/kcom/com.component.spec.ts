import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { Component } from '@angular/core';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// Load the implementations that should be tested
import {AppState} from "../../../app.service";
// import { HomeComponent } from './home.component';
// import { Title } from './title';
import {KComComponent} from "./kcom.component";
import {ComService} from "../../../theme/services/com/com.service";

describe(`KCom`, () => {
  let comp: KComComponent;
  let fixture: ComponentFixture<KComComponent>;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KComComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        BaseRequestOptions,
        MockBackend,
        ComService,
        {
          provide: Http,
          useFactory: (backend: ConnectionBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        },
        AppState,

      ]
    })
      .compileComponents(); // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(KComComponent);
    comp = fixture.componentInstance;

    fixture.detectChanges(); // trigger initial data binding
  });

  // it('should have default data', () => {
  //   expect(comp.localState).toEqual({ value: '' });
  // });

  it('should have a kcom object', () => {
    expect(!!comp.kcom).toBeTruthy();
  });

  // it('should log ngOnInit', () => {
  //   spyOn(console, 'log');
  //   expect(console.log).not.toHaveBeenCalled();
  //
  //   comp.ngOnInit();
  //   expect(console.log).toHaveBeenCalled();
  // });

});
