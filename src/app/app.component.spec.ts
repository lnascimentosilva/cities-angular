import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatMenuModule } from '@angular/material/menu'; 
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        RouterTestingModule,
        MatMenuModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as img src 'assets/images/eurovision_services_logo_transparent.png'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const img = fixture.nativeElement.querySelector('img')
    expect(img.src).toContain('assets/images/eurovision_services_logo_transparent.png');
  });

  describe('Navigation menu', () => {
    it('should not have the menu open', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const dom = fixture.nativeElement;
      const menu = dom.parentNode.querySelector('.mat-menu-panel');
      expect(menu).toBeFalsy();
    });

    it('should open the menu when clicking on the Menu button', () => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const dom = fixture.nativeElement;
      const button = dom.querySelector('.mat-menu-trigger');
      button.click();
      const menu = dom.parentNode.querySelector('.mat-menu-panel');
      expect(menu).toBeTruthy();
    });
  });
});
