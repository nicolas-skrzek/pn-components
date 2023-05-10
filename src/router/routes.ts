import AppHome from '@/view/appHome.vue'
import PnButton from '@/view/components/PnButton.vue'
import PnCalendar from '@/view/components/PnCalendar.vue'
import PnCard from '@/view/components/PnCard.vue'
import PnList from '@/view/components/PnList.vue'
import PnMenu from '@/view/components/PnMenu.vue'
import PnModal from '@/view/components/PnModal.vue'
import PnSelect from '@/view/components/PnSelect.vue'
import PnTable from '@/view/components/PnTable.vue'
import PnTextArea from '@/view/components/PnTextArea.vue'
import PnTextField from '@/view/components/PnTextField.vue'
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
        path: ROUTES.select.path,
        name: ROUTES.select.name,
        component: PnSelect,
      },
      {
        path: ROUTES.table.path,
        name: ROUTES.table.name,
        component: PnTable,
      },
      {
        path: ROUTES.textarea.path,
        name: ROUTES.textarea.name,
        component: PnTextArea,
      },
      {
        path: ROUTES.textfield.path,
        name: ROUTES.textfield.name,
        component: PnTextField,
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
