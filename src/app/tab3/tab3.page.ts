import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Capacitor } from '@capacitor/core';



@Component({
  standalone: true,
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class Tab3Page implements OnInit {
  message = '';
  eventTriggered = false;
  platform = '';

  ngOnInit() {
    this.platform = Capacitor.getPlatform(); // e.g. 'android', 'ios', 'web'
  }

  async scan() {
    try {
      const { barcodes } = await BarcodeScanner.scan();

      if (barcodes.length > 0) {
        const code = barcodes[0].rawValue;
        this.handleScannedCode(code);
      }
    } catch (err) {
      this.message = 'Scan failed. Try again.';
      console.error(err);
    }
  }

  handleScannedCode(code: string | undefined) {
    if (!code) {
      this.message = 'No code found.';
      return;
    }

    switch (code) {
      case 'OPEN123':
        this.message = '🎉 Secret door opened!';
        this.eventTriggered = true;
        break;

      case 'POTION42':
        this.message = '🧪 You received a health potion!';
        break;

      default:
        this.message = `❓ Unknown code: ${code}`;
    }
  }
}
