import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarPage } from './side-bar-page';

describe('SideBar', () => {
  let component: SideBarPage;
  let fixture: ComponentFixture<SideBarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideBarPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
