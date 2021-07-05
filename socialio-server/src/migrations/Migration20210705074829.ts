import { Migration } from '@mikro-orm/migrations';

export class Migration20210705074829 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "post" rename column "_id" to "id";');
  }

}
