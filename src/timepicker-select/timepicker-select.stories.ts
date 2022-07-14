/* tslint:disable variable-name */

import { FormsModule } from "@angular/forms";
import { moduleMetadata } from "@storybook/angular";
import { Story, Meta } from "@storybook/angular/types-6-0";
import { DocumentationModule } from "../documentation-component/documentation.module";
import { TimePickerSelectModule, TimePickerSelect } from "./";

export default {
	title: "Components/Timepicker Select",
	decorators: [
		moduleMetadata({
			imports: [
				TimePickerSelectModule,
				FormsModule,
				DocumentationModule
			]
		})
	]
} as Meta;

const Template: Story<TimePickerSelect> = (args) => ({
	props: args,
	template: `
		<div class="cds--form-item">
			<div class="cds--time-picker">
				<ibm-timepicker-select>
					<option selected value="AM">AM</option>
					<option value="PM">PM</option>
				</ibm-timepicker-select>
				<ibm-timepicker-select>
					<option selected value="Time Zone 1">Time Zone 1</option>
					<option value="Time Zone 2">Time Zone 2</option>
				</ibm-timepicker-select>
			</div>
		</div>
	`
});
export const Basic = Template.bind({});

const DocumentationTemplate: Story = () => ({
	template: `
		<ibm-documentation src="documentation/modules/src_timepicker_select.html"></ibm-documentation>
	`
});
export const Documentation = DocumentationTemplate.bind({});
