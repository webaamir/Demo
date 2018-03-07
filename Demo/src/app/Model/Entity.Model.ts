import { IEntity }                  from './IEntity.Model';

export class Entity implements IEntity {
    mainLimit:     number;
    mainRetention: number;
    executionType: string;
}
