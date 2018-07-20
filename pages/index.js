import Layout from '../components/Layout'
import ListDreams from '../components/ListDreams'
import ListLogs from '../components/ListLogs'
import ListDailyTasks from '../components/ListDailyTasks'
import ListWeeklyTasks from '../components/ListWeeklyTasks'
import StoneOfLife from '../components/StoneOfLife'

import Dreams from '../data/dreams'
import Stone from '../data/stone'
import Logs from '../data/logs'


const Page = (props) => (

  <Layout currentPage="home">

    <div className="row">
        <div className="col-12 col-lg-8">
            <ListDailyTasks dailyTasks={props.dailyTasks} />
            <ListWeeklyTasks weeklyTasks={props.weeklyTasks} />
            <ListDreams dreams={props.dreams} />
            <ListLogs logs={props.logs} />
        </div>

        <div className="col-12 col-lg-4">
            <StoneOfLife stone={props.stone} />
        </div>
    </div>

  </Layout>
)

Page.getInitialProps = async function() {

  // sort logs chronologically
  const LogsArr = Logs.data.sort(function (a, b) {
    let comparison = 0;
    if (a.id < b.id) {
      comparison = 1;
    } else {
      comparison = -1;
    }
    return comparison;
  })

  // filter dreams for daily/weekly tasks
  let weeklyTasks = []
  let dailyTasks = []
  const currentDate = new Date()
  const onejan = new Date(currentDate.getFullYear(), 0, 1)
  const dateOpts = { day: '2-digit', month: '2-digit',  year: 'numeric' }
  let taskDate, currentWeek, taskWeek

  // always start with a plan
  dailyTasks.push({due: currentDate.toLocaleDateString('en-GB', dateOpts), description: "Plan the day", reward: "Coffee", stone: "q3-log", status: 0})

  Dreams.data.forEach(dream => {
    dream.tasks.forEach(task => {
      taskDate = new Date(task.due)
      currentWeek = Math.ceil( (((currentDate - onejan) / 86400000) + onejan.getDay() + 1) / 7 )
      taskWeek = Math.ceil( (((taskDate - onejan) / 86400000) + onejan.getDay() + 1) / 7 )
      task.due = taskDate.toLocaleDateString('en-GB', dateOpts)
      if (taskWeek === currentWeek) { weeklyTasks.push(task) }
      if (taskDate.toLocaleDateString('en-GB', dateOpts) === currentDate.toLocaleDateString('en-GB', dateOpts)) { dailyTasks.push(task) }
    })
  })

  // always end with a review
  dailyTasks.push({due: currentDate.toLocaleDateString('en-GB', dateOpts), description: "Review & log the day", reward: "Go home!", stone: "q3-log", status: 0})

  return {
    dreams: Dreams.data,
    dailyTasks: dailyTasks,
    weeklyTasks: weeklyTasks,
    stone: Stone.data[0],
    logs: LogsArr
  }
}

export default Page