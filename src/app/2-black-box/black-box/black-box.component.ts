import { Component, OnInit } from '@angular/core';
import { AccordionItemData } from '../accordion/accordion-item/accordion-item.component';

interface ItemVM extends AccordionItemData {
  text: string;
}

@Component({
  selector: 'app-black-box',
  templateUrl: './black-box.component.html',
  styleUrls: ['./black-box.component.scss']
})
export class BlackBoxComponent implements OnInit {

  accordionItems: ItemVM[] = this.getAccordionItems();

  constructor() { }

  ngOnInit(): void {
  }

  // smart component maps data for dumb components to keep it decoupled
  private getAccordionItems(): ItemVM[] {
    return [
      {
        heading: 'Candy',
        icon: 'candy-cane',
        color: '#7D1128',
        text: `Dianthus barbatus, the sweet William,[2] is a species of flowering plant in the family Caryophyllaceae, native to southern Europe and parts of Asia. It has become a popular ornamental garden plant. It is a herbaceous biennial or short-lived perennial plant growing to 13–92 cm tall, with flowers in a dense cluster of up to 30 at the top of the stems. Each flower is 2–3 cm diameter with five petals displaying serrated edges. Wild plants produce red flowers with a white base, but colours in cultivars range from white, pink, red, and purple to variegated patterns. The exact origin of its English common name is unknown but first appears in 1596 in botanist John Gerard's garden catalogue. The flowers are edible and may have medicinal properties.[citation needed] Sweet William attracts bees, birds, and butterflies.`
      },
      {
        heading: 'Burger',
        icon: 'hamburger',
        color: '#F96900',
        text: `Sweet William grows in the mountains of southern Europe from the Pyrenees east to the Carpathians and the Balkans, with a variety disjunct in northeastern China, Korea, and southeasternmost Russia.[3][4][5] It grows to 13–92 cm tall (depending on the variety),[6] with green to glaucous blue-green tapered leaves 4–10 cm long and 1–2 cm broad. The flowers are produced in a dense cluster of up to 30 at the top of the stems (known as an umbel) and have a spicy, clove-like scent; each flower is 2–3 cm diameter with five petals with serrated edges; in wild plants the petals are red with a white base.`
      },
      {
        heading: 'Pizza',
        icon: 'pizza',
        color: '#648DE5',
        text: `Many legends purport to explain how sweet William acquired its English common name, but none is verified. It is often said to honour the 18th century Prince William, Duke of Cumberland. As a result of the Duke's victory at the Battle of Culloden and his generally brutal treatment of the king's enemies, it is also claimed that the Scots sometimes call the flower "stinking Billy".[9][10][11] Though this makes a nice story, it is entirely untrue. The Scots sometimes refer to the noxious ragwort[which?] as stinking Billy in memory of the infamous Duke. Phillips speculated that the flower was named after Gerard's contemporary, William Shakespeare.[12] It is also said to be named after Saint William of York or after William the Conqueror. Another etymological derivation is that william is a corruption of the French oeillet, meaning both "carnation" and "little eye". Sweet William is a favourite name for lovelorn young men in English folkloric ballads, e.g., "Fair Margaret and Sweet William".`
      },
      {
        heading: 'Coffee',
        icon: 'coffee',
        color: '#304C89',
        text: `John Gerard praises its beauty but omits any reference to medicinal uses. Its height makes it convenient for flower arrangements. In the Victorian language of flowers, sweet william symbolizes gallantry. The plant is widely used in borders, rock gardens and informal country cottage style gardens. Sweet William is a good candidate for a naturalistic garden because its nectar attracts birds, bees, and butterflies. Its flowers are considered edible.[citation needed] Sweet Williams is a family of dianthus. It thrives in loamy, slightly alkaline soil with sun to partial shade. Propagation is by seed, cuttings, or division, but seeds of cultivars will not breed true. If it is planted from seed after the last frost, it will flower in the second year. If it is planted in flats before the last frost and then transplanted, it may flower in the first year. Some gardeners recommend deadheading to encourage further flowering. The plant is self-seeding.[14] Sweet William can suffer from Fusarium Wilt which causes the leaves to curl or droop down.`
      },
    ];
  }

}
