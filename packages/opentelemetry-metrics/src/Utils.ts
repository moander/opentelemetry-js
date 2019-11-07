/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const COMMA_SEPARATOR = ',';

/**
 * Returns a string(comma separated) from the list of label values.
 *
 * @param labelValues The list of the label values.
 * @returns The hashed label values string.
 */
export function hashLabelValues(labelValues: string[]): string {
  return labelValues.sort().join(COMMA_SEPARATOR);
}

/**
 * Type guard to remove nulls from arrays
 *
 * @param value value to be checked for null equality
 */
export function notNull<T>(value: T | null): value is T {
  return value !== null;
}