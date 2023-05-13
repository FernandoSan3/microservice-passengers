import { Body, Controller } from "@nestjs/common";
import { PassengerDTO } from "./dto/passenger.dto";
import { PassengerService } from "./passenger.service";
import { PassengerMSG } from "./common/constants";
import { MessagePattern, Payload } from "@nestjs/microservices";

@Controller()
export class PassengerController {
    constructor(
        private readonly passengerService: PassengerService) { }

    @MessagePattern(PassengerMSG.CREATE)
    create(@Body() passengerDTO: PassengerDTO) {
        return this.passengerService.create(passengerDTO)
    }

    @MessagePattern(PassengerMSG.FIND_ALL)
    findAll() {
        return this.passengerService.findAll()
    }

    @MessagePattern(PassengerMSG.FIND_ONE)
    findOne(@Payload() id: string) {
        return this.passengerService.findOne(id)
    }

    @MessagePattern(PassengerMSG.UPDATE)
    update(@Payload() paylpad) {
        return this.passengerService.update(paylpad.id, paylpad.passengerDTO)
    }

    @MessagePattern(PassengerMSG.DELETE)
    delete(@Payload() id: string) {
        return this.passengerService.delete(id)
    }
}