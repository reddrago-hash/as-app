import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tab3',
  standalone: true,
  imports: [CommonModule, IonicModule], // ✅ Add required modules here
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss']
})
export class Tab3Page {
  message = '';
  givenItem: any = null;
  db = getFirestore(initializeApp(environment.firebaseConfig));  // initialize Firestore

  async giveItem() {
    try {
      const querySnapshot = await getDocs(collection(this.db, 'items'));
      const items = querySnapshot.docs.map(doc => doc.data());

      if (items.length > 0) {
        const randomItem = items[Math.floor(Math.random() * items.length)];
        this.givenItem = randomItem;
        this.message = `🎁 You received a ${randomItem['name']} with power ${randomItem['power']}`;
      } else {
        this.message = '⚠️ No items found in database.';
      }
    } catch (error) {
      console.error('Error retrieving items:', error);
      this.message = '❌ Failed to retrieve items.';
    }
  }
}
