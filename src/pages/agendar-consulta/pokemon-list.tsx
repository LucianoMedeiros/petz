import Button from '@/atoms/button/button'
import GridCol from '@/atoms/grid/grid-col'
import GridRow from '@/atoms/grid/grid-row'
import { SchedulerActions } from '@/store/scheduler/scheduler-reducer'
import { RootState, useAppDispatch, useAppSelector } from '@/store/store-config'
import { ChangeEvent } from 'react'
import PokemonView from './pokemon/pokemon-view'
import { PokemonViewModel } from './pokemon/pokemon-view-model'

const PokemonList = () => {
  const dispatch = useAppDispatch()

  const pokemonList = useAppSelector((state: RootState) => state.scheduler.current.pokemons)

  const maxPokemons = 6

  const addItem = () => {
    dispatch(SchedulerActions.addEmptyPokemon())
  }

  const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const viewModel = new PokemonViewModel()

    const value = e.target.value
    const pokemon = e.target.options[e.target.selectedIndex].text
    const index = e.target.getAttribute('data-index')
    const generation = e.target.getAttribute('generation')

    const gen = await viewModel.getGeneration(e.target.value)

    dispatch(
      SchedulerActions.updatePokemon({
        updatedItem: {
          name: pokemon,
          value,
          generation: gen,
        },
        index,
      }),
    )
  }

  const removeItem = (index: number) => {
    dispatch(SchedulerActions.removePokemon(index))
  }

  return (
    <>
      {pokemonList.length &&
        pokemonList.map((item, index) => (
          <GridRow key={index} verticalAlign='middle'>
            <GridCol span={12}>
              <PokemonView
                index={index}
                name={item.name}
                label={`Pokémon 0${index + 1}`}
                value={item.value}
                onChange={handleChange}
                layoutInline
                placeholder='Selecione seu pokémon'
              />
            </GridCol>

            {pokemonList.length > 1 && (
              <Button onClick={() => removeItem(index)} iconButton title='remover'>
                &ndash;
              </Button>
            )}
          </GridRow>
        ))}

      <GridRow>
        <GridCol span={12}>
          <Button secondary onClick={addItem} disabled={pokemonList.length >= maxPokemons}>
            {pokemonList.length >= maxPokemons ? 'Número máximo de pokémons adicionado' : 'Adicionar novo pokémon ao time... +'}
          </Button>
        </GridCol>
      </GridRow>
    </>
  )
}

export default PokemonList
