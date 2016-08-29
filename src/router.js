import HOG from 'hog-routes';
import { Types } from 'betelgeuse';
import MilliwayDish from './models/MilliwaysDish';
import ResponseError from './models/ResponseError';


const route = new HOG({use:'express', validations:true, json: true, errors: ResponseError});

route
  .post('/milliways/dish', {
    description: 'Add a new milliwaysDish to the store',
    responses: {
      xml: false, //default
      statuses: {
        200: { model: MilliwayDish },
        405: { reason: 'Invalid Input'}
      }
    },
    request: {
      body: {
        model: MilliwayDish,
        description: 'MilliwaysDish object that needs to be added to the store'
      }
    },
    validationErrorStatus: 400, // default
    //handler: controllers.milliwaysDish.post
  })
  .put({
    description: 'Update an existing milliwaysDish',
    responses: {
      statuses: {
        200: { model: MilliwayDish },
        400: { reason: 'Invalid ID supplied'},
        404: { reason: 'MilliwaysDish not found'},
        405: { reason: 'Validation exception'}
      }
    },
    request: {
      body: {
        model: MilliwayDish,
        description: 'MilliwaysDish object that needs to be added to the store'
      }
    },
    validationErrorStatus: 405,

  });

route
  .get('/milliways/dish/find-by-status', {
    description: 'Finds Pets by status',
    responses: {
      statuses: {
        200: { model: Types.arrayOf(MilliwayDish) },
        400: { reason: 'Invalid status value'},
      }
    },
    request: {
      query: {
        model: Types.attributeOf(MilliwayDish, 'status'),
        description: 'Multiple status values can be provided with comma separated strings'
      }
    }
  });


export default route;
