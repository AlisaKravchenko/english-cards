import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';
import { data } from './generateData';

export function training() {
  const dataSize = data.length;
  const trainSize = Math.floor(dataSize * 0.8);
  const testSize = dataSize - trainSize;
  tf.util.shuffle(data);

  
  const trainData = data.slice(0, trainSize);
  const testData = data.slice(trainSize);

  
  const xsTrain = tf.tensor2d(trainData.map(d => d.slice(0, 3)))
  const ysTrain = tf.tensor2d(trainData.map(d => [d[3]]), [trainSize, 1])

  
  const xsTest = tf.tensor2d(testData.map(d => d.slice(0, 3)))
  const ysTest = tf.tensor2d(testData.map(d => [d[3]]), [testSize, 1])

  const model = tf.sequential();
  
  model.add(tf.layers.dense({ inputShape: [3], units: 10, activation: 'relu' }))
  model.add(tf.layers.dense({ units: 1 }))
  

  model.compile({
    optimizer: tf.train.adam(),
    loss: 'meanSquaredError'
  });

  const epochs = 10;
  const batchSize = 1024;
  const lossValues = [];
  (async () => {
    for (let epoch = 0; epoch < epochs; epoch++) {
      const history = await model.fit(xsTrain, ysTrain, {
        epochs: 1,
        batchSize,
        shuffle: true,
        verbose: 0
      });

      
      const lossValue = history.history.loss[0];
      lossValues.push({ x: epoch + 1, y: lossValue.toFixed(4) });
      console.log(`Эпоха ${epoch + 1}/${epochs}, Потеря: ${lossValue.toFixed(4)}`);

    }

      
      //  tfvis.render.linechart(
      //   { name: 'График потерь (loss) при обучении', tab: 'Обучение' },
      //    { values: [lossValues], series: ['loss'] },
      //   {
      //     xLabel: 'Эпоха',
      //     yLabel: 'Потеря',
      //     width: 500,
      //     height: 400,
      //     container: document.getElementById('charts')
      //   }
      // );
    

    //model.save('localstorage://intervalsModel');
    
    const predictions = model.predict(xsTest);

    const predictedValues = await predictions.data();
    const actualValues = await ysTest.data();
    console.log('Результаты на тестовых данных:');
    for (let i = 0; i < testSize; i++) {
      //console.log(`Вход: ${testData[i].slice(0,3).join(', ')} | Предсказано: ${predictedValues[i].toFixed(3)} | Реальное: ${actualValues[i].toFixed(3)}`);
    }

    const predictedValues1 = []
    const actualValues1 = []
    let c = 0 ;
    predictedValues.forEach(el => {
      if (c%500 === 0){
        predictedValues1.push({ x: c, y: el.toFixed(4) })
      }
      c++;
    });
    c=0;
    actualValues.forEach(el => {
      if (c%500 === 0){
        actualValues1.push({ x: c, y: el.toFixed(4) })
      }
      
      c++;
    });
    tfvis.render.linechart(
        { name: 'График ожидаемых и предсказанных значений', tab: 'Обучение' },
        { values: [actualValues1, predictedValues1], series: ['ожидаемые', 'предсказанные'] },
        {
          xLabel: 'номер',
          yLabel: 'значение',
          width: 1400,
          height: 800,
          container: document.getElementById('charts'),
        }
    );
  
    model.layers[0].getWeights()[0].print()
    model.layers[0].getWeights()[1].print()
    model.layers[1].getWeights()[0].print()
    model.layers[1].getWeights()[1].print()
     
    xsTrain.dispose();
    ysTrain.dispose();
    xsTest.dispose();
    ysTest.dispose();
    predictions.dispose();
  })();
}
