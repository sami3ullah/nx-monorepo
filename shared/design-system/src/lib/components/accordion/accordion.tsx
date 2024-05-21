import { ChevronDownIcon } from 'lucide-react';
import * as AccordionComp from './accordion.component';

export const Accordion = (props: AccordionComp.RootProps) => {
  const items = ['React', 'Solid', 'Svelte', 'Vue'];
  return (
    <AccordionComp.Root defaultValue={['React']} multiple {...props}>
      {items.map((item, id) => (
        <AccordionComp.Item key={id} value={item} disabled={item === 'Svelte'}>
          <AccordionComp.ItemTrigger>
            {item}
            <AccordionComp.ItemIndicator>
              <ChevronDownIcon />
            </AccordionComp.ItemIndicator>
          </AccordionComp.ItemTrigger>
          <AccordionComp.ItemContent>
            Pudding donut gummies chupa chups oat cake marzipan biscuit tart.
            Dessert macaroon ice cream bonbon jelly. Jelly topping tiramisu
            halvah lollipop.
          </AccordionComp.ItemContent>
        </AccordionComp.Item>
      ))}
    </AccordionComp.Root>
  );
};

export default Accordion;
