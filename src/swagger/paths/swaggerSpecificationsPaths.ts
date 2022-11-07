/**
 * @openapi
 * /specifications:
 *   post:
 *     tags:
 *       - Especificações
 *     summary: Cadastro de especificações
 *     description: Cadastrar uma nova especificação
 *     operationId: addSpecifications
 *     requestBody:
 *       description: Criar uma especificação
 *       content:
 *        application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateSpecifications'
 *       required: true
 *     responses:
 *      '200':
 *        description: Successful operation
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  description: Mensagem de sucesso.
 *                  example: Specifications created successfully!
 *                data:
 *                  $ref: '#/components/schemas/Specifications'
 *      '400':
 *        description: Specifications already exists!
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ApiError'
 *   get:
 *     tags:
 *       - Especificações
 *     summary: Listar especificações
 *     description: Listar todas as especificações cadastradas
 *     responses:
 *      '200':
 *        description: Successful operation
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                  $ref: '#/components/schemas/Specifications'
 * /specifications/{name}:
 *   get:
 *     tags:
 *       - Especificações
 *     summary: Listar especificações
 *     description: Listar especificações pelo nome
 *     operationId: getSpecificationsByName
 *     parameters:
 *       - name: name
 *         in: path
 *         description: Nome da especificação
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Specifications'
 *       400:
 *         description: Specifications dont exists!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiError'
 */
