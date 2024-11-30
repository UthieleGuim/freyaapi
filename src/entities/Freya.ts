import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";
import { Item } from "./Items";

@Entity("Freya")
export class Freya {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column()
  name: string;

  @Column()
  material: string;

  @Column()
  email: string;

  @Column()
  whatsapp: string;

  @Column()
  zipCode: string;

  @Column()
  address: string;

  @Column()
  number: string;

  @Column()
  uf: string;

  @Column()
  city: string;

  @Column()
  latitude: string;

  @Column()
  longitude: string;

  @Column(type => Item)
  items: Item[];
}