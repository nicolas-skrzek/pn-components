import AppHome from '@/view/appHome.vue'
import PnButton from '@/view/components/PnButton.vue'
import PnCalendar from '@/view/components/PnCalendar.vue'
import PnCard from '@/view/components/PnCard.vue'
import PnCheckbox from '@/view/components/PnCheckbox.vue'
import PnIcon from '@/view/components/PnIcon.vue'
import PnInputField from '@/view/components/PnInputField.vue'
import PnList from '@/view/components/PnList.vue'
import PnMenu from '@/view/components/PnMenu.vue'
import PnModal from '@/view/components/PnModal.vue'
import PnSwitch from '@/view/components/PnSwitch.vue'
import PnTable from '@/view/components/PnTable.vue'
import PnTree from '@/view/components/PnTree.vue'
import { ROUTES } from './routes.const'

const routes = [
  {
    path: ROUTES.home.path,
    name: ROUTES.home.name,
    component: AppHome,
    children: [
      {
        path: ROUTES.button.path,
        name: ROUTES.button.name,
        component: PnButton,
      },
      {
        path: ROUTES.calendar.path,
        name: ROUTES.calendar.name,
        component: PnCalendar,
      },
      {
        path: ROUTES.card.path,
        name: ROUTES.card.name,
        component: PnCard,
      },
      {
        path: ROUTES.checkbox.path,
        name: ROUTES.checkbox.name,
        component: PnCheckbox,
      },
      {
        path: ROUTES.icon.path,
        name: ROUTES.icon.name,
        component: PnIcon,
      },
      {
        path: ROUTES.inputfield.path,
        name: ROUTES.inputfield.name,
        component: PnInputField,
      },
      {
        path: ROUTES.list.path,
        name: ROUTES.list.name,
        component: PnList,
      },
      {
        path: ROUTES.menu.path,
        name: ROUTES.menu.name,
        component: PnMenu,
      },
      {
        path: ROUTES.modal.path,
        name: ROUTES.modal.name,
        component: PnModal,
      },
      {
        path: ROUTES.switch.path,
        name: ROUTES.switch.name,
        component: PnSwitch,
      },
      {
        path: ROUTES.table.path,
        name: ROUTES.table.name,
        component: PnTable,
      },
      {
        path: ROUTES.tree.path,
        name: ROUTES.tree.name,
        component: PnTree,
      },
    ],
  },
]

export { routes }
