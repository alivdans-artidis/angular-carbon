import {
	Component,
	OnChanges,
	OnInit,
	Input
} from "@angular/core";
import { IconService } from "./glyphicon.service";

@Component({
	selector: "cdl-glyphicon",
	template: `<span
					class="cdl-glyphicon"
					[ngStyle]="{width: iconSize + 'px', height: iconSize + 'px'}">
					<svg
						[attr.width]="iconSize"
						[attr.height]="iconSize">
						<use [attr.xlink:href]="'#'+icon+'_'+clampSize(iconSize)"></use>
					</svg>
				</span>`,
	styles: [`
		:host {
			vertical-align: middle;
			display: inline-block;
			fill: #959494;
		}
	`],
	providers: [IconService]
})
export class Glyphicon implements OnChanges {
	public iconSize: string;
	@Input() icon = "";
	@Input() size = "sm";

	constructor(private icons: IconService) {}

	clampSize(size) {
		size = parseInt(size, 10);
		if (size <= 14) {
			return 14;
		}
		if (size > 14 && size <= 16) {
			return 16;
		}
		if (size > 16 && size <= 20) {
			return 20;
		}
		if (size >= 30) {
			return 30;
		}
	}

	ngOnChanges(changes) {
		// init icon and watch for changes
		if (changes.size) {
			this.iconSize = this.icons.size2px(changes.size.currentValue);
		}
	}
}
