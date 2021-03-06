import { Component, Input } from '@angular/core';

import { Question} from 'src/app/models/question';
import { QuestionType } from 'src/app/models/question-type';

interface typeOptionViewModel{
  name: string;
  value: QuestionType;
}

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent {

  @Input()
  public questionViewModel: Question;

  public types: Array<typeOptionViewModel> = [
    { name:"选择题", value: QuestionType.MultipleChoice },
    { name:"多选题", value: QuestionType.MultipleAnswers },
    { name:"判断题", value: QuestionType.TureOrFalse },
    { name:"填空题", value: QuestionType.FillInTheBlank },
  ];

}
