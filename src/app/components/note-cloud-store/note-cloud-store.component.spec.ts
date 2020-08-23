import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteCloudStoreComponent } from './note-cloud-store.component';

describe('NoteCloudStoreComponent', () => {
  let component: NoteCloudStoreComponent;
  let fixture: ComponentFixture<NoteCloudStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteCloudStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteCloudStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
