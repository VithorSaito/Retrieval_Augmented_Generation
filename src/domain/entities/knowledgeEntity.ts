export class Knowledge {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly category: string,
    public readonly problem: string,
    public readonly solution: string,
    public readonly environment: string,
    public readonly embedding_context: number[]
  ) { }
}