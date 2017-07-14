/* eslint-disable no-param-reassign, operator-assignment */

class ExercisesList extends React.Component {
    state = {
        exercises: [],
    };

    componentDidMount() {
        this.setState({exercises: Plans.exercises});
    }

    render() {
        const exercises = this.state.exercises;

        const exerciseComponents = exercises.map((exercise) => (
            <Excercise
                key={'exercise-' + exercise.id}
                id={exercise.id}
                title={exercise.title}
                description={exercise.description}
                image={exercise.image}
                geraetenummer={exercise.geraetenummer}
                saetze={exercise.saetze}
                gewicht={exercise.gewicht}
                muskelgruppe={exercise.muskelgruppe}
            />
        ));
        return (
            <div className='ui unstackable items'>
                {exerciseComponents}
            </div>
        );
    }
}

class Excercise extends React.Component {
    handleUpVote = () => (
        this.props.onVote(this.props.id)
    );

    render() {
        return (
            <div className='item'>
                <div className='middle aligned content'>
                    <div className='header'>
                        Gerät: {this.props.geraetenummer}
                    </div>
                    <div className='content'>
                        <p>
                            {this.props.description} <br/>
                            Muskelgruppe: {this.props.muskelgruppe}
                        </p>
                        <p>
                            Sätze: {this.props.saetze} - Gewicht: {this.props.gewicht}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <ExercisesList />,
    document.getElementById('content')
);
