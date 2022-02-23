module.exports = {
  remainingDays(job) {
      //calculo dos dias que faltam
      const remainingDays = (job["total-hours"] / 
      job["daily-hours"]).toFixed()

      //adicionar os dias à data de criação
      const createdDate = new Date(job.created_at)
      const dueDay = createdDate.getDate() + Number(remainingDays)

      //para criar uma data futura
      const dueDate = createdDate.setDate(dueDay)

      //diferença do tempo que irá vencer para agora
      const timeDiffInMS = dueDate - Date.now()

      //transformar os milisegundos em dias 
      const dayInMs = 1000 * 60 * 60 * 24 

      //diferença em dias
      const dayDiff = Math.floor(timeDiffInMS / dayInMs)

     // restam x dias
      return dayDiff
 },
 calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
}