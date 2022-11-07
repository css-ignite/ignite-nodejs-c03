/**
 * @openapi
 * /categories:
 *   post:
 *     tags:
 *       - Categorias
 *     summary: Cadastro de categorias
 *     description: Cadastrar uma nova categoria
 *     operationId: addCategory
 *     requestBody:
 *       description: Criar uma categoria
 *       content:
 *        application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateCategory'
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
 *                  example: Category created successfully!
 *                data:
 *                  $ref: '#/components/schemas/Category'
 *      '405':
 *        description: Invalid input
 *   get:
 *     tags:
 *       - Categorias
 *     summary: Listar categorias
 *     description: Listar todas as categorias cadastradas
 *     responses:
 *      '200':
 *        description: Successful operation
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                  $ref: '#/components/schemas/Category'
 * /categories/{name}:
 *   get:
 *     tags:
 *       - Categorias
 *     summary: Listar categorias por nome
 *     description: Listar uma determinada categoria pelo nome
 *     operationId: getCategoriesByName
 *     parameters:
 *       - name: name
 *         in: path
 *         description: Nome da categoria
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *        description: Successful operation
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Category'
 *       400:
 *         description: Category dont exists!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiError'
 * /categories/import/csv:
 *   post:
 *     tags:
 *       - Categorias
 *     summary: Importação de Cadastro de categorias
 *     description: Importar um CSV para Cadastrar um lista de categorias
 *     operationId: importCategory
 *     requestBody:
 *       description: Criar uma categoria
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *       required: true
 *     responses:
 *       200:
 *        description: Successful operation
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Category'
 *       400:
 *         description: Category dont exists!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ApiError'
 */
