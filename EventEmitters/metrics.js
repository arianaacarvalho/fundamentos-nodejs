//Registrador de méticas - mética: evento que tem um nome, valor e uma unidade de medida. E é comum ter a data.
//cliente -> [metrics bus] -> logar as métricas 
const {EventEmitter} = require('events')
const {delay} = require('../helpers/libDelay')

const metricsBus = () => {
  const e = new EventEmitter({ captureRejections: true,})

  e
  .on('error', error => {
    console.error('MetricsBus capiturou o erro: ', error);
  })

  const publish = (metric) => {
    e.emit('metric', metric)
  }

    const subscriber = (subscriber) => {
        e.on('metric', subscriber)
    }

    return {
        publish,
        subscriber,
    }
}

const bus = metricsBus()

const Metric = ({name, value, unit}) => ({
    name,
    value,
    unit,
    timestamp: new Date()
})

const loggerMetricsSubscriber = async(metric) => {
    await delay(10)
    console.log(JSON.stringify(metric, null, 2))
}

module.exports = {
  bus,
  metricsBus,
  loggerMetricsSubscriber,
  Metric,
}
