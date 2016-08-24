import Betelgeuse, { Types } from 'betelgeuse';
import Category from 'models/Category';
import Tag from 'models/Tag';

export default class MilliwaysDish extends Betelgeuse {
  static schema = {
    'id': {
      'type':  Types.integer,
      'format': 'int64'
    },
    'category': {
      'ref': Category
    },
    'name': {
      'type': Types.string,
      'example': 'cow',
      'required': true
    },
    'photoUrls': Types.arrayOf(String, {required: true}),
    'tags': Types.arrayOf(Tag),
    'status': {
      'type': Types.string,
      'description': 'pet status in the store',
      'enum': [
            'available',
            'sold-out'
          ]
    }
  }
}



