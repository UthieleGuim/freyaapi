import { Column } from "typeorm";

export class Item {
  @Column()
  code: number;

  @Column()
  description: string;
}