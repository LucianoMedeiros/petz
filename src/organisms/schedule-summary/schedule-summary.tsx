import Button from '../../atoms/button/button'
import SummaryBox from '../../atoms/summary/summary-box'
import SummaryConditions from '../../atoms/summary/summary-conditions'
import SummaryFooter from '../../atoms/summary/summary-footer'
import SummaryItem from '../../atoms/summary/summary-item'
import { formatBRL } from '../../utils/format-brl'
import { numTwoDigits } from '../../utils/num-two-digits'
import useScheduleSummary from './use-schedule-summary-hook'

const ScheduleSummary = () => {
  const summary = useScheduleSummary()

  return (
    <SummaryBox>
      <SummaryItem label='Número de pokémons a serem atendidos:' value={numTwoDigits(summary.amountPokemons)} />
      <SummaryItem label='Atendimento unitário por pokémon:' value={formatBRL(summary.unityValue)} />
      <SummaryItem label='Subtotal:' value={formatBRL(summary.subTotal)} />
      <SummaryItem label='Taxa geracional*:' value={formatBRL(summary.taxGeneration)} />

      <SummaryConditions>
        * adicionarmos uma taxa de 3%, multiplicado pelo número da geração mais alta do time, com limite de até 30%
      </SummaryConditions>

      <SummaryFooter total={summary.total}>
        <Button onClick={summary.handleSubmit}>Concluir Agendamento</Button>
      </SummaryFooter>
    </SummaryBox>
  )
}

export default ScheduleSummary
