import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
	NbBadgeModule,
	NbButtonModule,
	NbCardModule,
	NbCheckboxModule,
	NbDialogModule,
	NbDialogService,
	NbFormFieldModule,
	NbIconModule,
	NbInputModule,
	NbLayoutModule,
	NbSelectModule,
	NbSidebarModule,
	NbSidebarService,
	NbSpinnerModule,
	NbToastrService,
	NbToggleModule,
	NbTooltipModule
} from '@nebular/theme';
import { NgSelectModule } from '@ng-select/ng-select';
import { Angular2SmartTableModule } from 'angular2-smart-table';
import { AlwaysOnService } from '../always-on/always-on.service';
import { ElectronService, LoggerService } from '../electron/services';
import { ImageViewerModule } from '../image-viewer/image-viewer.module';
import { ActivityWatchModule } from '../integrations';
import { LanguageSelectorService } from '../language/language-selector.service';
import { NgxTranslateModule } from '../ngx-translate';
import { TimeSlotQueueService } from '../offline-sync';
import { ErrorHandlerService, NativeNotificationService, Store, ToastrNotificationService } from '../services';
import { TasksModule } from '../tasks/tasks.module';
import { CustomRenderComponent } from './custom-render-cell.component';
import { NoDataMessageModule } from './no-data-message/no-data-message.module';
import { OrganizationSelectorComponent } from './organization-selector/organization-selector.component';
import { UserOrganizationService } from './organization-selector/user-organization.service';
import { PaginationModule } from './pagination/pagination.module';
import { PipeModule } from './pipes/pipe.module';
import { TaskRenderModule } from './task-render/task-render.module';
import { TimeTrackerStatusModule } from './time-tracker-status/time-tracker-status.module';
import { TimeTrackerComponent } from './time-tracker.component';
import { TimeTrackerService } from './time-tracker.service';

@NgModule({
	declarations: [TimeTrackerComponent, CustomRenderComponent, OrganizationSelectorComponent],
	imports: [
		CommonModule,
		NbLayoutModule,
		NbCardModule,
		NbToggleModule,
		NbSelectModule,
		NbInputModule,
		NbButtonModule,
		NbSpinnerModule,
		NbIconModule,
		NbEvaIconsModule,
		NbSidebarModule,
		FormsModule,
		NbCheckboxModule,
		ReactiveFormsModule,
		NgSelectModule,
		NbDialogModule,
		NbFormFieldModule,
		Angular2SmartTableModule,
		NbTooltipModule,
		TasksModule,
		NbToggleModule,
		NbBadgeModule,
		PaginationModule,
		NbTooltipModule,
		TimeTrackerStatusModule,
		ImageViewerModule,
		NgxTranslateModule,
		TaskRenderModule,
		ActivityWatchModule,
		NoDataMessageModule,
		PipeModule
	],
	providers: [
		NbSidebarService,
		TimeTrackerService,
		NbDialogService,
		NbToastrService,
		UserOrganizationService,
		ErrorHandlerService,
		NativeNotificationService,
		ToastrNotificationService,
		ElectronService,
		LoggerService,
		Store,
		TimeSlotQueueService,
		LanguageSelectorService,
		AlwaysOnService
	],
	exports: [TimeTrackerComponent]
})
export class TimeTrackerModule {}
