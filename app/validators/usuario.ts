import vine from '@vinejs/vine'

/**
 * Validates the Usuario creation action
 */
export const createUsuariolidator = vine.compile(
  vine.object({
    nome: vine.string().trim().minLength(10),
    email: vine.string().trim().minLength(10),
    dataNascimento: vine.date()
    })
)

/**
 * Validates the Usuario update action
 */
export const updateUsuarioValidator = vine.compile(
  vine.object({
    nome: vine.string().trim().minLength(10),
    email: vine.string().trim().minLength(10),
    dataNascimento: vine.date()
    })
)
