import * as tf from '@tensorflow/tfjs';
import { WEIGHTS } from './weights';


export async function predict(a, b, c) {
  const input = tf.tensor2d([[a, b, c]]); 
  const model = await tf.loadLayersModel('localstorage://intervalsModel');
  const output = model.predict(input);
  const prediction = await output.data();
  input.dispose();
  output.dispose();

  return Math.max(Math.min(prediction[0], 3), 0.2);
}


export async function nn() {
  
  const model = tf.sequential();
  model.add(tf.layers.dense({ inputShape: [3], units: 10, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 1 }));


  model.layers[0].setWeights([
    tf.tensor2d(WEIGHTS[0], [3, 10]),
    tf.tensor1d(WEIGHTS[1])
  ]);
  model.layers[1].setWeights([
    tf.tensor2d(WEIGHTS[2], [10, 1]),
    tf.tensor1d(WEIGHTS[3])
  ]);

  model.save('localstorage://intervalsModel');


}