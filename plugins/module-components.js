import Vue from 'vue'
import ModuleCardComponent from '@/components/layout/ModuleCardComponent.vue'
import InputDataComponent from '@/components/layout/InputDataComponent.vue'
import BottomSheetComponent from '@/components/layout/BottomSheetComponent.vue'
import BottomNavigationComponent from '@/components/layout/BottomNavigationComponent.vue'
import ParameterTableComponent from '@/components/layout/ParameterTableComponent'
import ParameterValueComponent from '@/components/layout/ParameterValueComponent'
import KonvaSpan from '@/components/graphics/KonvaSpan.vue'
import KonvaSimpleSupport from '@/components/graphics/KonvaSimpleSupport.vue'
import KonvaText from '@/components/graphics/KonvaText.vue'
import KonvaDim from '@/components/graphics/KonvaDim.vue'
import KonvaUniformLoad from '@/components/graphics/KonvaUniformLoad.vue'
import KonvaPointLoad from '@/components/graphics/KonvaPointLoad.vue'


const components = {  ModuleCardComponent, InputDataComponent, 
                      BottomSheetComponent, BottomNavigationComponent,
                      ParameterTableComponent, ParameterValueComponent,
                      KonvaSpan, KonvaSimpleSupport, KonvaText, 
                      KonvaUniformLoad, KonvaPointLoad, KonvaDim
 }

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})

