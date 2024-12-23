export type departmentType = "production" | "hr" | "advertisement";

export interface productLineType {
  /**类型标签：自动，柔性，传统 */
  label: string;
  /**消耗人工 */
  workers: {
    /**手工 */
    tradition: number;
    /**高级 */
    advance: number;
  };
  /**生产费用 */
  fee: number;
  /**生产效率 */
  efficiency: number;
  /**生产周期 */
  cycle: number;
  /**产品 */
  product: string;
  /**建造费用 */
  buildPrice: number;
  /**建造周期  逻辑TODO*/
  buildCycle: number;
}
